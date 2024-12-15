import { Badge, Button, Flex, Table } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";
import IssueStatusBadge from "../components/IssueStatusBadge"; 

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
      <Table.Root variant="ghost">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          
            {issues.map(issue => (
              <Table.Row key={issue.id}>
                <Table.Cell>
                  {issue.title}
                </Table.Cell>
                <Table.Cell className='hidden md:table-cell'>
                  <IssueStatusBadge status={issue.status} />
                </Table.Cell>
                <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
