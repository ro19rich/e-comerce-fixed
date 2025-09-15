// components/FullPageLoading.jsx
export default function Loading({ message = "Loading..." }) {
  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-70 flex flex-col items-center justify-center z-50">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-300 h-20 w-20 mb-4 animate-spin"></div>
      <p className="text-gray-700 text-lg font-medium">{message}</p>

      {/* Spinner color override */}
      <style>
        {`
          .loader {
            border-top-color: #3b82f6; /* Tailwind blue-500 */
          }
        `}
      </style>
    </div>
  );
}
