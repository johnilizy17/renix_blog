export default function Search({ article }) {
    return (
      <a rel="noreferrer" href={`/posts/${article._id}`} target="_blank">
        <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-500 ease-out">
          <div className="space-y-0.5">
            <h6 className="text-sm font-bold">{article.title}</h6>
            <p className="text-xs font-medium text-gray-500">
              {article.body}
            </p>
          </div>
         {article.photo && <img
            className="rounded-xl "
            width="70"
            src={article.photo}
            alt=""
          />}
        </div>
      </a>
    );
  }
  