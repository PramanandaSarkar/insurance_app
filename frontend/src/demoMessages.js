const demoMessages = [
    {
      id: "1",
      sender: "Client: John Doe",
      recipient: "Staff: Alice Johnson",
      subject: "Insurance Claim Update",
      content:
        "Hi Alice, I’d like to check the status of my insurance claim filed last week. Could you please provide an update?",
      timestamp: "2025-01-14T10:30:00Z",
      type: "client-to-staff",
      replies: [
        {
          sender: "Staff: Alice Johnson",
          content:
            "Hello John, your claim is currently under review. I’ll provide an update by the end of the week.",
          timestamp: "2025-01-14T12:00:00Z",
        },
      ],
    },
    {
      id: "2",
      sender: "Admin: Sarah Lee",
      recipient: "Staff: Bob Smith",
      subject: "Monthly Report Reminder",
      content:
        "Hello Bob, please make sure to submit your monthly report by the 20th of this month. Let me know if you need any assistance.",
      timestamp: "2025-01-13T15:00:00Z",
      type: "admin-to-staff",
      replies: [],
    },
  ];
  
export default demoMessages;