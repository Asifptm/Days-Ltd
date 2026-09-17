import { Input, type InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  className?: string;
} & InputProps;

export function FormField({
  label,
  className,
  id,
  name,
  ...inputProps
}: FormFieldProps) {
  const fieldId = id ?? name;

  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor={fieldId}
        className="block font-serif text-lg text-foreground sm:text-xl"
      >
        {label}
      </label>
      <Input id={fieldId} name={name ?? id} {...inputProps} />
    </div>
  );
}
