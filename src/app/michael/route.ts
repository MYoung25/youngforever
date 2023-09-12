import { NextResponse } from 'next/server'
const input = undefined;
import { ListObjectsCommand, S3Client } from '@aws-sdk/client-s3';

export const runtime = "edge";

export async function GET() {
  const client = new S3Client({
    region: 'auto',
    endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID || ''}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
    }
  });

  const command = new ListObjectsCommand({ Bucket: 'wedding' });
  const response = await client.send(command);

  return new Response(JSON.stringify(response.Contents), {
    status: 200
  })
}