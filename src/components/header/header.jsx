import './header.css'

export default function Header() {
  return (
    <div className='pageHeader'>
        <div className='pageHeaderForeground'>
            <div className='pageHeaderHeader'>
                <div className='pageHeaderLangPicker'>
                    <select>
                        <option value='de'>Deutsch</option>
                        <option value='en'>English</option>
                        <option value='fr'>Français</option>
                    </select>
                </div>
            </div>
            <div className='pageHeaderRegister'>
                <div className='pageHeaderText'>
                    <h1>Unbegrenzt Filme, Serien und mehr</h1>
                    <h2>Genießen Sie Netflix, wo immer sie möchten. Jederzeit kündbar.</h2>
                    <h3>Sind Sie startklar? Geben Sie Ihre E-Mail-Adresse ein, um Ihre Mitgliedschaft zu beginnen oder zu reaktivieren.</h3>
                </div>
            </div>
        </div>
        
    </div>
  )
}
