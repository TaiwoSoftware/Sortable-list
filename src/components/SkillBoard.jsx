export default function SkillBoard() {
  return (
    <>
      <div>
        <div className="bg-blue-900 rounded-lg p-2 flex justify-between items-center px-6 text-white">
          <p className="text-xl">1. JavaScript</p>
          <p className="text-2xl">&times;</p>
        </div>
        <div className="bg-blue-900 mt-4 rounded-lg p-2 flex justify-between items-center px-6 text-white">
          <p className="text-xl">2. ReactJs</p>{" "}
          <p className="text-2xl">&times;</p>
        </div>
        <div className="bg-blue-900 mt-4 rounded-lg p-2 flex justify-between items-center px-6 text-white">
          <p className="text-xl">3. Nextjs</p>{" "}
          <p className="text-2xl">&times;</p>
        </div>
      </div>
    </>
  );
}
