export default function SuggestedSkill({sidebarSkill}) {
  return (
    <div className="flex gap-1 items-center">
        <p className="text-gray-500">+</p>
        <p className="text-gray-500 text-sm ">{sidebarSkill}</p>
    </div>
  )
}
