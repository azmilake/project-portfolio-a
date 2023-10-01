const BreadCrumb = (props) => {
  return (
    <div className="max-w-7xl mx-auto my-5 pl-3 lg:p-0">
      <p>
        <span className="text-gray-500">Home</span> /{' '}
        <span className="font-semibold">{props.name}</span>
      </p>
    </div>
  );
};

export default BreadCrumb;
