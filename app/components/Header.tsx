import logoImage from '../../public/assets/zilif.png';
import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import LanguageSwitcher from './LanguageSwitcher';

export const Header = () => {
    return (
        <header className="flex items-center mt-5 ">
            <div className="flex items-center gap-3 w-full">
                <div className="flex-shrink-0">
                    <Image
                        src={logoImage}
                        alt="Şirket Logosu"
                        className="rounded-full object-cover w-28 h-28"
                    />
                </div>
                <nav className="flex items-center space-x-6 font-medium text-gray-700 overflow-x-auto">
                    <a href="#about" className="hover:text-dark-red">
                        <FormattedMessage id="a1B" defaultMessage="Hakkımızda" />
                    </a>

                    <a href="#location" className="hover:text-dark-red">
                        <FormattedMessage id="f3D" defaultMessage="Konum" />
                    </a>

                    <a href="#newsletter" className="hover:text-dark-red">
                        <FormattedMessage id="x9Q" defaultMessage="Bülten" />
                    </a>

                    <a href="#contact" className="text-dark-red font-semibold">
                        <FormattedMessage id="k7M" defaultMessage="Bize Ulaşın" />
                    </a>
                   
                </nav>
            </div>
        </header>
    );
}