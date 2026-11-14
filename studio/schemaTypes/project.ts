import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project name',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().max(600),
    }),
    defineField({
      name: 'image',
      title: 'Project image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'Live site URL',
      type: 'url',
      validation: (rule) =>
        rule.uri({scheme: ['http', 'https']}).warning('Use a full http:// or https:// URL'),
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
      validation: (rule) =>
        rule.uri({scheme: ['http', 'https']}).warning('Use a full http:// or https:// URL'),
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display order',
      description: 'Lower numbers appear first on the portfolio.',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'link',
      media: 'image',
    },
  },
})
