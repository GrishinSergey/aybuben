// src/pages/TestsPage.tsx
import {useLang} from '../i18n/LangContext';
import {PageStub} from '../components/PageStub';

export function TestsPage() {
  const {t} = useLang();
  return (
    <PageStub
      title={t.pages.tests.title}
      subtitle={t.pages.tests.subtitle}
      icon="🎯"
    />
  );
}
