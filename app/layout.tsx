import type { Metadata } from "next";

const postUrl = `${process.env["HOST"]}/api/frame`;

export async function generateMetadata(): Promise<Metadata> {
  const imageUrl = `${process.env["HOST"]}/impersonator.gif`;

  return {
    title: "Impersonator.xyz",
    description: "Impersonate as any address in Dapps",
    openGraph: {
      title: "Impersonator.xyz",
    },
    other: {
      "fc:frame": "vNext",
      "fc:frame:image": imageUrl,
      "fc:frame:post_url": postUrl,
      "fc:frame:input:text": "Type ENS or Address to impersonate...",
      "fc:frame:button:1": "🕵️ Start",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
