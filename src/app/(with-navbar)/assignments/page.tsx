import { Metadata } from 'next'

import AssignmentList from './assignment-list'

import { makeTitle } from '@/constants/metadata'

export const metadata = {
  title: makeTitle('Assigments'),
} satisfies Metadata

export default function AssignmentsPage() {
  return (
    <main>
      <AssignmentList />
    </main>
  )
}
