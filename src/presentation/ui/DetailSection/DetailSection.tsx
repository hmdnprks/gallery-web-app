export default function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
}
