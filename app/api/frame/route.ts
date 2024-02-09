import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    untrustedData: { inputText },
  } = await req.json();
  const inputAddress = inputText ?? "";

  const imageUrl = `${process.env["HOST"]}/impersonator.gif`;

  return new NextResponse(
    `<!DOCTYPE html>
      <html>
        <head>
          <title>Echo Says:</title>
          <meta property="og:title" content="Echo Says:" />
          <meta property="og:image" content="${imageUrl}" />
          <meta name="fc:frame" content="vNext" />
          <meta name="fc:frame:image" content="${imageUrl}" />

          <meta name="fc:frame:button:1" content="🦄 Uniswap" />
          <meta name="fc:frame:button:1:action" content="link" />
          <meta name="fc:frame:button:1:target" content="https://impersonator.xyz/?url=https://app.uniswap.org&address=${inputAddress}" />

          <meta name="fc:frame:button:2" content="👻 Aave" />
          <meta name="fc:frame:button:2:action" content="link" />
          <meta name="fc:frame:button:2:target" content="https://impersonator.xyz/?url=https://app.aave.com&address=${inputAddress}" />

          <meta name="fc:frame:button:3" content="🏦 Yearn" />
          <meta name="fc:frame:button:3:action" content="link" />
          <meta name="fc:frame:button:3:target" content="https://impersonator.xyz/?url=https://yearn.fi&address=${inputAddress}" />
        </head>
        <body/>
      </html>`,
    {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}

export const GET = POST;
