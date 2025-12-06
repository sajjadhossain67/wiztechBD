export default function Footer() {
  return (
    <footer className="bg-[#2a1628] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Property
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>hello.abc@gmail.com</p>
              <p>+01223455567</p>
            </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {["f", "x", "ig", "wa", "be", "tt"].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#a01b5a] transition"
                >
                  <span className="text-xs">{social}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-12">
          <div className="text-center">
            <img src="/wiztecbd-logo.png" alt="WiztecBD Logo" className="h-16 w-auto mx-auto mb-4" />
            <p className="text-gray-400 text-sm">© 2025 Havank. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
