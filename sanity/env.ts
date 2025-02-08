export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-07'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skkjYq3TYJDvsRWXjQ5aFWzx6pexqxWvY4L1GjdF7IA0AZ66VKKZvS4xGVSINuSZyyWjG4GNgDNsjkzwA78OFqNbhmH4l8unxvrkQGhLoy80jkZgW3vlXZU4FYT8Ld9rjByeG9KLh4hVbvbbPoSCwWOmDaS6EvCpCqmwS89KAAkIWzK90TPI",
  'Missing environment variable: NEXT_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
