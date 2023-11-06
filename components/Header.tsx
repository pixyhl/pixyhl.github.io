import Link from 'next/link'

function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 384" version="1.1">
    <path
        d="M 26 83.752 C 18.523 87.487, 19.003 79.081, 19.002 206.173 L 19 319.847 21.589 322.923 L 24.178 326 39.033 326 C 53.293 326, 54.001 325.903, 56.694 323.588 L 59.500 321.176 59.801 288.069 L 60.102 254.962 68.301 255.731 C 80.769 256.901, 107.752 256.555, 114.500 255.139 C 145.213 248.693, 168.878 231.621, 180.532 207.500 C 185.660 196.886, 187.631 189.700, 188.978 176.709 C 190.095 165.943, 189.018 150.724, 186.432 140.727 C 179.418 113.601, 158.777 93.902, 129.620 86.505 C 115.327 82.880, 102.533 82.002, 64 82.002 C 33.157 82.003, 29.129 82.188, 26 83.752 M 60 169.321 L 60 220.820 68.750 221.588 C 99.002 224.240, 117.571 219.835, 131.693 206.656 C 143.087 196.023, 147.838 182.204, 146.700 163.004 C 145.390 140.895, 136.114 128.486, 115.087 120.715 C 110.143 118.888, 106.652 118.603, 84.750 118.236 L 60 117.821 60 169.321"
        stroke="none" fill="#040404" fill-rule="evenodd" />
    <path
        d="M 230.405 83.105 C 228.558 85.145, 228.492 88.753, 228.221 201.355 C 228.068 265.235, 228.192 318.524, 228.497 319.775 C 228.802 321.027, 229.939 322.939, 231.025 324.025 C 232.771 325.771, 234.385 326, 244.944 326 C 256.127 326, 257.067 325.846, 259.694 323.588 L 262.500 321.175 263 274.813 L 263.500 228.451 266.873 221.602 C 271.085 213.051, 279.755 204.195, 288.221 199.794 C 293.865 196.861, 295.359 196.530, 303 196.524 C 312.235 196.517, 315.316 197.603, 320.403 202.657 C 324.178 206.409, 326.829 212.766, 328.004 220.888 C 328.530 224.525, 328.969 248.558, 328.980 274.295 L 329 321.091 331.455 323.545 C 333.790 325.881, 334.496 326, 346 326 C 357.575 326, 358.198 325.893, 360.600 323.491 L 363.109 320.982 362.764 265.741 C 362.435 212.894, 362.327 210.169, 360.278 202.856 C 356.396 189.004, 349.292 178.485, 340 172.830 C 332.423 168.219, 325.717 166.621, 314 166.632 C 294.140 166.650, 280.925 171.883, 269.459 184.267 L 263 191.243 263 140.271 C 263 87.723, 262.742 84.003, 258.961 81.979 C 257.955 81.441, 251.547 81, 244.721 81 C 233.374 81, 232.147 81.180, 230.405 83.105"
        stroke="none" fill="#fc0404" fill-rule="evenodd" />
</svg>
  )
}

function Logo() {
  return (
    <Link href="/" className="inline-flex justify-center items-center">
      <span className="mr-2">
        <Icon />
      </span>
      <span className="font-bold">Pixy Hash</span>
    </Link>
  )
}

export function Header() {
  return (
    <header className="p-8 flex justify-center">
      <Logo />
    </header>
  )
}
