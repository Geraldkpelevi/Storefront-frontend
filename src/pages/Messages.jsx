import { MessageDialog } from "../components/MessageDialog";

export default function Messages() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h1 className="mb-4 text-2xl font-bold text-blue-gray-900">
        Messages
      </h1>
      <p className="mb-6 text-gray-600">
        Manage your messages and conversations.
      </p>

      <MessageDialog />
    </div>
  );
}