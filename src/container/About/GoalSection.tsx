import React from "react";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";

export default function GoalSection() {
  const goals = [
    {
      icon: <Target className="w-10 h-10 text-blue-500" />,
      title: "มุ่งสู่ความเป็นเลิศ",
      desc: "สร้างมาตรฐานเทคโนโลยีที่มีคุณภาพสูงและมีประสิทธิภาพ",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-blue-500" />,
      title: "ส่งเสริมความคิดสร้างสรรค์",
      desc: "สนับสนุนให้ทีมงานและลูกค้าใช้นวัตกรรมเพื่อสร้างคุณค่าใหม่",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "ร่วมมือเพื่อเติบโต",
      desc: "สร้างพันธมิตรระยะยาว เติบโตไปพร้อมกับลูกค้าและทีมงาน",
    },
    {
      icon: <Rocket className="w-10 h-10 text-blue-500" />,
      title: "ขับเคลื่อนด้วยเทคโนโลยี",
      desc: "ใช้เทคโนโลยีเพื่อขับเคลื่อนองค์กรและสังคมให้ก้าวหน้า",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          เป้าหมายของเรา
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          เรามุ่งมั่นสร้างเส้นทางแห่งการเติบโตด้วยเทคโนโลยี  
          ที่ช่วยให้องค์กรและบุคลากรไปถึงเป้าหมายอย่างยั่งยืน
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-5">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center text-center mb-12 md:mb-0 md:w-1/4"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-white border-4 border-blue-500 rounded-full shadow-md mb-4">
              {goal.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {goal.title}
            </h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">{goal.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
