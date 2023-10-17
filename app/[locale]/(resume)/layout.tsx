"use client";

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import DarkModeProvider, { useResumeContext } from './ResumeContext';

const ResumeLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const { darkMode } = useResumeContext();
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <DarkModeProvider>
      <main className={`h-full overflow-auto ${darkMode
          ? "bg-[#111827]"
          : "bg-[#e7eff6]"
        }`}>
        <div className="mx-auto max-w-screen-xl h-full w-full">
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </div>
      </main>
    </DarkModeProvider>
  );
};

export default ResumeLayout;