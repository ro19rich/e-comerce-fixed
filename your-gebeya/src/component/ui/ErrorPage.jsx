// ErrorPage.jsx
import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold">Oops! Something went wrong.</h1>
      <p className="mt-4 text-stone-700">
        {error?.message || "Unexpected error occurred."}
      </p>
    </div>
  );
}
