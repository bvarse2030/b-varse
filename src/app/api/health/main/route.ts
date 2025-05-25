import { NextResponse } from 'next/server';

export const formatResponse = (data: unknown, message: string, status: number) => {
  const ok = status >= 200 && status < 300;
  return NextResponse.json({ ok, data, message, status_code: status }, { status });
};

// ! GET
// http://localhost:3000/api/health/main?q=abc&limit=100&page=40&role=admin
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const queryParams: Record<string, string | string[]> = {};
    searchParams.forEach((value, key) => {
      if (queryParams[key]) {
        if (Array.isArray(queryParams[key])) {
          (queryParams[key] as string[]).push(value);
        } else {
          queryParams[key] = [queryParams[key] as string, value];
        }
      } else {
        queryParams[key] = value;
      }
    });

    const responseData = {
      receivedQuery: queryParams,
      data: [],
    };

    return formatResponse(responseData, 'Data retrieved successfully via GET', 200);
  } catch (error) {
    console.error('GET Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return formatResponse({ error: errorMessage }, 'Error processing GET request', 500);
  }
}

// ! POST
// localhost:3000/api/health/main
export async function POST(req: Request) {
  try {
    const reqData = await req.json();
    return formatResponse(reqData, 'Data received successfully via POST', 200);
  } catch (error) {
    console.error('POST Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Invalid request body';
    if (errorMessage.includes('Unexpected end of JSON input') || errorMessage.includes('missing request body')) {
      return formatResponse({ error: 'Request body is missing or empty.' }, 'Failed to parse request body', 400);
    }
    return formatResponse({ error: 'Invalid JSON body or missing Content-Type header.' }, 'Failed to parse request body', 400);
  }
}

// ! PUT
//localhost:3000/api/health/main
export async function PUT(req: Request) {
  try {
    const reqData = await req.json();
    return formatResponse(reqData, 'Data updated successfully via PUT', 200);
  } catch (error) {
    console.error('PUT Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Invalid request body';
    if (errorMessage.includes('Unexpected end of JSON input') || errorMessage.includes('missing request body')) {
      return formatResponse({ error: 'Request body is missing or empty.' }, 'Failed to parse request body', 400);
    }
    return formatResponse({ error: 'Invalid JSON body or missing Content-Type header.' }, 'Failed to parse request body', 400);
  }
}

// !DELETE

export async function DELETE(req: Request) {
  try {
    const reqData = await req.json();

    const responseData = { deletedId: reqData.id, status: 'successfully deleted (simulated)' };
    return formatResponse(responseData, `Resource with id: ${reqData.id} processed for deletion via DELETE`, 200);
  } catch (error) {
    console.error('DELETE Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return formatResponse({ error: errorMessage }, 'Error processing DELETE request', 500);
  }
}
