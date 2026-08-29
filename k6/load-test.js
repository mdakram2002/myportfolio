import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 20 },
    { duration: '20s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get('https://mdakram.vercel.app/');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'page contains title text': (r) => r.body.includes("Akram's Portfolio - Full Stack Engineer"),
    'response time < 2s': (r) => r.timings.duration < 2000,
  });

  sleep(1);
}