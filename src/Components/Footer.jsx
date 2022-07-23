import React from 'react'

export default function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer  className="footer">© Copyright {thisYear} | <strong>Group B</strong> | Programming with ❤</footer>
  )
}
