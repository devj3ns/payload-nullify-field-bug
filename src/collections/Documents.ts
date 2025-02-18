import type { CollectionConfig } from 'payload'

export const Documents: CollectionConfig = {
  slug: 'documents',
  fields: [
    {
      name: 'list',
      type: 'array',
      required: true,
      localized: true,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'text',
              required: true,
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
