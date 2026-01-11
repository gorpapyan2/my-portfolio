import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Eye, EyeOff } from 'lucide-react';
import { Card } from '../components/shared/Card';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { TranslationText } from '../components/shared/TranslationText';
import AnimatedGridBackground from '../components/AnimatedGridBackground';
import ParticleBackground from '../components/ParticleBackground';

export function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { signIn } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await signIn(email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatedGridBackground>
      <ParticleBackground />
      <div className="flex items-center justify-center p-4">
        <Card className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-lg bg-[#edfc3a]/10 text-[#edfc3a] mb-4">
            <LogIn className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            <TranslationText translationKey="admin.login.title" as="span" shimmerWidth="150px" />
          </h1>
          <p className="text-gray-400">
            <TranslationText translationKey="admin.login.subtitle" as="span" shimmerWidth="300px" />
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              <TranslationText translationKey="admin.login.emailLabel" as="span" shimmerWidth="120px" />
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent"
              placeholder={t('admin.login.emailPlaceholder')}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              <TranslationText translationKey="admin.login.passwordLabel" as="span" shimmerWidth="80px" />
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 pr-10 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-[#edfc3a] focus:border-transparent"
                placeholder={t('admin.login.passwordPlaceholder')}
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#edfc3a] text-black rounded-lg font-medium hover:bg-[#f2ff4d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent" />
                <TranslationText translationKey="admin.login.signingIn" as="span" shimmerWidth="120px" />
              </>
            ) : (
              <>
                <LogIn className="h-4 w-4" />
                <TranslationText translationKey="admin.login.signIn" as="span" shimmerWidth="80px" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-white transition-colors text-sm"
            disabled={isLoading}
          >
            <TranslationText translationKey="admin.login.backToPortfolio" as="span" shimmerWidth="180px" />
          </button>
        </div>
      </Card>
      </div>
    </AnimatedGridBackground>
  );
}
