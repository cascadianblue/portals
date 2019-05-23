import { SynapseObjectSingle } from '../types/portal-config'

const exploreButtonsConfiguration: SynapseObjectSingle = {
  name: 'ExploreButtonControlWrapper',
  title: 'Explore',
  props: {
    synapseObjectSingle: {} as SynapseObjectSingle,
    colors: [
      '#6c5c97',
      '#E5AE4C',
      '#5BB0B5',
      '#5171C0',
      '#0f9488',
      '#D4689A',
    ],
    customRoutes: [
      {
        name: 'Programs'
      },
      {
        name: 'Projects'
      },
      {
        name: 'Studies'
      },
      {
        name: 'Data'
      },
      {
        name: 'Publications'
      },
      {
        name: 'People'
      }
    ]
  },
}

export default exploreButtonsConfiguration
