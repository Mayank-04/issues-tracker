import { Badge } from "@radix-ui/themes";
import { Status } from "@prisma/client";

// Declares a constant variable statusMap .
// Record<Status, ...>: This is a type annotation that indicates statusMap is a record(an object with a specific structure). "Status" type is imported from @prisma/client.
// { label: string, color: 'red' | 'violet' | 'green' }: This is the type of values in the statusMap record. Each value is an object with two properties: label and color.
// The object literal { ... }: This defines the actual values in the statusMap record.
const statusMap: Record<
  Status, 
  { label: string, color: 'red' | 'violet' | 'green' }
> = {
  OPEN: { label: 'Open', color: 'red' },
  IN_PROGRESS: { label: 'In Progress', color: 'violet' },
  CLOSED: { label: 'Closed', color: 'green' }
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>
      {statusMap[status].label}
    </Badge>
  )
}

export default IssueStatusBadge