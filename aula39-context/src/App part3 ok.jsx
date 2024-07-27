
import './App.css'
import { DynamicThemeProvider } from './contexts/dynamicThemeContext'
import { UserPreferencesProvider } from './contexts/userPreferencesContext'
import { LanguageProvider } from './contexts/languageContext'
import { AdvancedLanguageProvider } from './contexts/advancedLanguageContext'
import { UserProfileProvider } from './contexts/userProfileContext'
import { AuthProvider } from './contexts/authContext'
import LoginButton from './components/loginButton'
import LogoutButton from './components/logoutButton'
import UserStatus from './components/userStatus';
import Profile from './components/profile';
import EditProfile from './components/editProfile';
import ViewModeSwitcher from './components/viewModeSwitcher';
import ItemList from './components/itemList';
import LanguageSwitcher from './components/languageSwitcher';
import Greeting from './components/greeting';
import LanguageRegionSwitcher from './components/languageRegionSwitcher';
import LocalizedContent from './components/localizedContent';
import ThemeSelector from './components/themeSelector';
import ThemedComponent from './components/themedComponent';

export function App() {
  return (
    <DynamicThemeProvider>
      <UserPreferencesProvider>
        <LanguageProvider>
          <AdvancedLanguageProvider>
            <UserProfileProvider>
              <AuthProvider>
                <div className="p-4 bg-slate-400 text-black">
                  <div className="flex gap-6 px-6 w-100 bg-slate-500 justify-end">
                    <UserStatus />
                    <LoginButton />
                    <LogoutButton />
                  </div>
                  <div className="flex flex-1">
                    <div className="border w-80 mx-auto my-6">
                      <Profile />
                      <EditProfile />
                    </div>
                    <div className="border w-80 mx-auto my-6">
                      <div className="border">
                        <ViewModeSwitcher />
                        <ItemList />
                      </div>
                      <div className="border">
                        <LanguageSwitcher />
                        <Greeting />
                      </div>
                      <div className="border">
                        <LanguageRegionSwitcher />
                        <LocalizedContent />
                      </div>
                      <div className="border">
                        <ThemeSelector />
                        <ThemedComponent />
                      </div>
                    </div>
                  </div>
                </div>
              </AuthProvider>
            </UserProfileProvider>
          </AdvancedLanguageProvider>
        </LanguageProvider>
      </UserPreferencesProvider>
    </DynamicThemeProvider>
  )
}

