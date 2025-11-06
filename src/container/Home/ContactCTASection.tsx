import Link from 'next/link'
import React from 'react'

export default function ContactCTASection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                พร้อมที่จะเริ่มต้นโปรเจกต์ของคุณ?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                ติดต่อเราวันนี้เพื่อปรึกษาโครงการและรับคำแนะนำฟรี
              </p>
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                ติดต่อเรา
              </Link>
            </div>
          </section>
  )
}
