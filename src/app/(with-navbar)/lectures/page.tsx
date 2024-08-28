import { Metadata } from 'next'

import LectureTree from './lecture-tree'

import { makeTitle } from '@/constants/metadata'

export const metadata = {
  title: makeTitle('Lectures'),
} satisfies Metadata

export default function LecturesPage() {
  return (
    <main>
      <LectureTree />
    </main>
  )
}
