"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const deleteIssue = async () => {
    try {
        await axios.delete("/api/issues/" + issueId);
        router.push("/issues");
        router.refresh()
    } catch (error) {
        setError(true);
        console.log(error);
    }
  }
  return (
    <>
        <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete Issue</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this issue? This action cannot be
          undone.
        </AlertDialog.Description>
        <Flex className="mt-4" gap="3">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              color="red"
              onClick={deleteIssue}
            >
              Delete Issue
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
    <AlertDialog.Root open={error}>
        <AlertDialog.Content>
            <AlertDialog.Title>Error</AlertDialog.Title>
            <AlertDialog.Description>This issue could not be deleted.</AlertDialog.Description>
            <Button color="gray" variant="soft" onClick={() => setError(false)} className="mt-2">OK</Button>
        </AlertDialog.Content>
    </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
