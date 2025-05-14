"use client"

export function ContactMap() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.7891392430936!2d18.068321677556566!3d59.33258747466392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5c9f39e051%3A0x1d6f5f49e42af2bd!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sus!4v1715707000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
      ></iframe>
    </div>
  )
}
