import { weddingDetails } from '../data/weddingDetails'

const formatIcsDate = (date: Date) =>
  date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

const escapeIcsText = (text: string) =>
  text.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/\n/g, '\\n')

export const downloadCalendarInvite = () => {
  const startDate = new Date(weddingDetails.weddingDate)
  const endDate = new Date(startDate.getTime() + 5 * 60 * 60 * 1000)
  const uid = `wedding-${startDate.getTime()}@digital-invitation.local`

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Digital Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(startDate)}`,
    `DTEND:${formatIcsDate(endDate)}`,
    `SUMMARY:${escapeIcsText(`${weddingDetails.couple.displayNames} Wedding`)}`,
    `DESCRIPTION:${escapeIcsText(weddingDetails.invitationMessage)}`,
    `LOCATION:${escapeIcsText(`${weddingDetails.venue.name}, ${weddingDetails.venue.address}`)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'wedding-invitation.ics'
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
