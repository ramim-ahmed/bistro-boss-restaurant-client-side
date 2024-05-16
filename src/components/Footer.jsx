export default function Footer() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-12">
          <div className="bg-[#1F2937] lg:col-span-6 col-span-12 p-32">
            <div className="text-white lg:text-right text-center">
              <h3 className="text-xl">CONTACT US</h3>
              <div className="space-y-3 mt-3">
                <p>123 ABS Street, Uni 21, Bangladesh</p>
                <p>+88 123456789</p>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>
          </div>
          <div className="bg-[#111827] lg:col-span-6 col-span-12 p-32">
            <div className="text-white lg:text-left text-center">
              <h3 className="text-xl">Follow On US</h3>
              <div className="space-y-3 mt-3">
                <p>Join us on social media</p>
                <div className="flex items-center space-x-3 text-blue-600">
                  <p>Facebook</p>
                  <p>Instragram</p>
                  <p>Twitter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1E1E1E] text-center py-3 text-white">
          <p>
            Copyright © Bistro Boss {new Date().getFullYear()}. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
