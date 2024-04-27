
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <div style={{
    maxWidth: 600,
    margin: "0 auto",
    lineHeight: 1.5
   }}>{children}</div>
  );
}
