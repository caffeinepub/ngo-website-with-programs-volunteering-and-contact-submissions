import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { VolunteerInterest, ContactMessage, DonationPledge } from '../backend';

export function useSubmitVolunteerInterest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (interest: VolunteerInterest) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitVolunteerInterest(interest);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['volunteerInterests'] });
    },
  });
}

export function useSubmitContactMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (message: ContactMessage) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitContactMessage(message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactMessages'] });
    },
  });
}

export function useSubmitDonationPledge() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (pledge: DonationPledge) => {
      if (!actor) throw new Error('Actor not available');
      return actor.submitDonationPledge(pledge);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['donationPledges'] });
    },
  });
}
