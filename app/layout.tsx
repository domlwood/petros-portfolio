import './global.css';

export const metadata = {
  title: 'Petros - Portfolio',
  description: 'tba',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
