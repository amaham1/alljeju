import Link from 'next/link';


export default function Header() {
    return (
        <nav>
            <ul style={{display: 'flex', justifyContent: 'space-between'}}>
                <li><Link href="/">Logo</Link></li>
                <li><Link href="/aprt">공항</Link></li>
                <li>하늘</li>
                <li>관광</li>
                <li>부동산</li>
            </ul>
        </nav>
    )
}