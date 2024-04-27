import SelectSkill from "@/components/SelectSkill";
import SkillBoard from "@/components/SkillBoard";
import SuggestedSkill from "@/components/SuggestedSkill";

export default function page() {
  return (
    <div className="mt-16">
      <h1 className="text-center text-3xl font-semibold text-blue-950">
        Select your top 5 tech skills
      </h1>
      <div className="bg-white max-w-3xl flex gap-16 p-12 rounded-lg mt-6 mx-auto ">
          <div className="w-full">
            <SkillBoard />
            <SelectSkill />
            <SelectSkill />
          </div>
          <div className="w-1/3">
            <h2 className="font-bold text-blue-950">Suggested Skills</h2>
            <SuggestedSkill 
              sidebarSkill='HTML'
            />
            <SuggestedSkill 
              sidebarSkill='CSS'
            />
            <SuggestedSkill 
              sidebarSkill='Bootstrap'
            />
            <SuggestedSkill 
              sidebarSkill='TypeScript'
            />
            <SuggestedSkill 
              sidebarSkill='VueJs'
            />
            <SuggestedSkill 
              sidebarSkill='Angular'
            />
            <SuggestedSkill 
              sidebarSkill='NodeJS'
            />
          </div>
        </div>
      </div>
  );
}
