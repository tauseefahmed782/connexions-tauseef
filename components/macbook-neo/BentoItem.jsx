export default function BentoItem({
  title,
  description,
  image,
  reverse = false,
  full = false,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
      <div
        className={`grid gap-6 items-center ${
          full
            ? "grid-cols-1"
            : "grid-cols-1 md:grid-cols-2"
        } ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        <div>
          {title && (
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-3">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-600 text-base md:text-lg">
              {description}
            </p>
          )}
        </div>

        {image && (
          <div>
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}