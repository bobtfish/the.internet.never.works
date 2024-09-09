import { z } from 'zod'

export const openSourceProjectSchema = z.object({
  name: z.string(),
  url: z.string(),
  description: z.string(),
  languages: z.string()
})

export type OpenSourceProject = z.infer<typeof openSourceProjectSchema>

export const educationSchema = z.object({
  institution: z.string(),
  description: z.string(),
  startDate: z.string(),
  endDate: z.string()
})

export type Education = z.infer<typeof educationSchema>

export const accomplishmentSchema = z.object({
  description: z.string()
})

export type Accomplishment = z.infer<typeof accomplishmentSchema>

export const positionSchema = z.object({
  title: z.string(),
  startDate: z.string(),
  endDate: z.string()
})

export type Position = z.infer<typeof positionSchema>

export const employementSchema = z.object({
  companyName: z.string(),
  url: z.string(),
  positions: z.array(positionSchema),
  accomplishments: z.array(accomplishmentSchema)
})

export type Employment = z.infer<typeof employementSchema>

export const programmingLanguageSchema = z.string()

export type ProgrammingLanguage = z.infer<typeof programmingLanguageSchema>

export const CVSchema = z.object({
  name: z.string(),
  profile: z.string(),
  employmentHistory: z.array(employementSchema),
  education: z.array(educationSchema),
  programmingLanguages: z.array(programmingLanguageSchema),
  openSourceProjects: z.array(openSourceProjectSchema)
})

export type CV = z.infer<typeof CVSchema>

export function parseCV(data: CV) {
    return CVSchema.parse(data)
}