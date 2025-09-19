import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function FeatureCard({
  title,
  desc,
  icon,
  className,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("border-0 shadow-sm ring-1 ring-black/5", className)}>
      <CardHeader className="pb-2">
        <div className="mb-2 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-tr from-blue-600/15 to-indigo-500/15">
          {icon}
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">{desc}</CardContent>
    </Card>
  );
}
