import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

const Banner = () => {
  return (
    <div className=" bg-[#312e81] p-8 rounded-lg mt-6">
      <section className="flex flex-col lg:flex-row justify-around items-center bg-[#f1f5f9] shadow-lg rounded-lg p-8 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col items-center space-y-2">
          <FileDownloadDoneIcon className="text-[#312e81]" fontSize="large" />
          <p className="text-xl font-semibold">Super Efficient</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <FileDownloadDoneIcon className="text-[#312e81]" fontSize="large" />
          <p className="text-xl font-semibold">Deeply Committed</p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <FileDownloadDoneIcon className="text-[#312e81]" fontSize="large" />
          <p className="text-xl font-semibold">Highly Skilled</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
