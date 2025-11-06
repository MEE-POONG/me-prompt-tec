import Link from 'next/link'
import React from 'react'

export default function InternshipCTASection() {
  return (
    <section className="py-20 bg-linear-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            เข้าร่วมทีมกับเรา
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-3xl mx-auto">
            เปิดรับนักศึกษาฝึกงาน/สหกิจศึกษา ร่วมทำโปรเจกต์จริง เรียนรู้จากผู้เชี่ยวชาญ
            พัฒนาทักษะเพื่ออนาคตในอุตสาหกรรมเทคโนโลยี
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { label: 'โปรเจกต์จริง', icon: '💼' },
              { label: 'เทคโนโลยีล่าสุด', icon: '🚀' },
              { label: 'ทีมมืออาชีพ', icon: '👥' },
              { label: 'ประสบการณ์', icon: '⭐' },
            ].map((benefit) => (
              <div key={benefit.label} className="text-center">
                <div className="text-4xl mb-2">{benefit.icon}</div>
                <div className="font-semibold">{benefit.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/internship"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            ดูข้อมูลโปรแกรมฝึกงาน
          </Link>
        </div>
      </section>
  )
}
