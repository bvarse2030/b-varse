// ./apiUtils.ts
import { NextResponse } from 'next/server';
export const formatResponse = (data: string, message: string, status: number) => {
  const ok = status >= 200 && status < 300;
  return NextResponse.json({ ok, data, message, status_code: status }, { status });
};
