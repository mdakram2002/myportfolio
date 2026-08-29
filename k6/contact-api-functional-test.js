import http from 'k6/http';
import { check, group } from 'k6';

export const options = {
  vus: 1,
  iterations: 1,
};

const BASE_URL = __ENV.CONTACT_API_URL || 'https://mdakram.vercel.app/api/v1/contactUs';
const LOAD_TEST_SECRET = __ENV.LOAD_TEST_SECRET;

const headers = {
  'Content-Type': 'application/json',
  'x-load-test': LOAD_TEST_SECRET,
};

function post(payload) {
  return http.post(BASE_URL, JSON.stringify(payload), { headers });
}

function safeJson(res) {
  try { return JSON.parse(res.body); } catch { return null; }
}

export default function () {
  group('Valid submission with contactNumber succeeds', () => {
    const res = post({
      firstName: 'Test', lastName: 'User', email: 'test.user@example.com',
      contactNumber: '9876543210', message: 'This is a valid functional test message.',
    });
    check(res, {
      'status is 200': (r) => r.status === 200,
      'success is true': (r) => safeJson(r)?.success === true,
    });
  });

  group('Valid submission WITHOUT contactNumber still succeeds', () => {
    const res = post({
      firstName: 'Test', lastName: 'User', email: 'test.user2@example.com',
      message: 'Testing optional contact number omission.',
    });
    check(res, {
      'status is 200 when contactNumber omitted': (r) => r.status === 200,
      'success is true when contactNumber omitted': (r) => safeJson(r)?.success === true,
    });
  });

  group('Missing firstName is rejected with 400', () => {
    const res = post({
      lastName: 'User', email: 'test.user3@example.com', message: 'Missing first name test.',
    });
    check(res, {
      'status is 400 when firstName missing': (r) => r.status === 400,
      'success is false when firstName missing': (r) => safeJson(r)?.success === false,
    });
  });

  group('Missing message is rejected with 400', () => {
    const res = post({
      firstName: 'Test', lastName: 'User', email: 'test.user4@example.com',
    });
    check(res, {
      'status is 400 when message missing': (r) => r.status === 400,
      'success is false when message missing': (r) => safeJson(r)?.success === false,
    });
  });

  group('Invalid email format is rejected with 400', () => {
    const res = post({
      firstName: 'Test', lastName: 'User', email: 'not-an-email', message: 'Testing invalid email format.',
    });
    check(res, {
      'status is 400 for invalid email': (r) => r.status === 400,
      'success is false for invalid email': (r) => safeJson(r)?.success === false,
    });
  });

  group('Non-numeric contactNumber is rejected with 400', () => {
    const res = post({
      firstName: 'Test', lastName: 'User', email: 'test.user5@example.com',
      contactNumber: 'not-a-number', message: 'Testing invalid phone format.',
    });
    check(res, {
      'status is 400 for invalid contactNumber': (r) => r.status === 400,
      'success is false for invalid contactNumber': (r) => safeJson(r)?.success === false,
    });
  });

  group('Message over 5000 chars is rejected with 400', () => {
    const res = post({
      firstName: 'Test', lastName: 'User', email: 'test.user6@example.com',
      message: 'a'.repeat(5001),
    });
    check(res, {
      'status is 400 for oversized message': (r) => r.status === 400,
      'success is false for oversized message': (r) => safeJson(r)?.success === false,
    });
  });

  group('Response never leaks raw error.message on failure', () => {
    const res = post({
      firstName: 'Test', lastName: 'User', email: 'not-an-email', message: 'Checking for error leakage.',
    });
    const body = safeJson(res);
    check(res, {
      'response does not contain "error" key': () => body?.error === undefined,
      'response does not contain stack trace text': (r) => !r.body.includes('at ') && !r.body.includes('.js:'),
    });
  });
}