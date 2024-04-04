export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full justify-center border-t-2 border-gray-900 py-12 h-10">
      <a>
        &copy; {currentYear} Boring Company Inc. All rights reserved.
      </a>
    </footer>
  )
}