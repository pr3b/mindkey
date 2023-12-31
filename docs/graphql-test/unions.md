---
id: unions
title: Unions
slug: unions
sidebar_position: 7
---

<!-- Do not edit this file, it has been automatically generated by docusaurus-graphql-plugin -->

## Assignee

Types that can be assigned to issues.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Bot](objects#bot)
- [Mannequin](objects#mannequin)
- [Organization](objects#organization)
- [User](objects#user)

## AuditEntryActor

Types that can initiate an audit log event.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Bot](objects#bot)
- [Organization](objects#organization)
- [User](objects#user)

## Closer

The object which triggered a `ClosedEvent`.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Commit](objects#commit)
- [PullRequest](objects#pullrequest)

## CreatedIssueOrRestrictedContribution

Represents either a issue the viewer can access or a restricted contribution.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [CreatedIssueContribution](objects#createdissuecontribution)
- [RestrictedContribution](objects#restrictedcontribution)

## CreatedPullRequestOrRestrictedContribution

Represents either a pull request the viewer can access or a restricted contribution.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [CreatedPullRequestContribution](objects#createdpullrequestcontribution)
- [RestrictedContribution](objects#restrictedcontribution)

## CreatedRepositoryOrRestrictedContribution

Represents either a repository the viewer can access or a restricted contribution.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [CreatedRepositoryContribution](objects#createdrepositorycontribution)
- [RestrictedContribution](objects#restrictedcontribution)

## EnterpriseMember

An object that is a member of an enterprise.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [EnterpriseUserAccount](objects#enterpriseuseraccount)
- [User](objects#user)

## IpAllowListOwner

Types that can own an IP allow list.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Enterprise](objects#enterprise)
- [Organization](objects#organization)

## IssueOrPullRequest

Used for return value of Repository.issueOrPullRequest.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](objects#issue)
- [PullRequest](objects#pullrequest)

## IssueTimelineItem

An item in an issue timeline

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [AssignedEvent](objects#assignedevent)
- [ClosedEvent](objects#closedevent)
- [Commit](objects#commit)
- [CrossReferencedEvent](objects#crossreferencedevent)
- [DemilestonedEvent](objects#demilestonedevent)
- [IssueComment](objects#issuecomment)
- [LabeledEvent](objects#labeledevent)
- [LockedEvent](objects#lockedevent)
- [MilestonedEvent](objects#milestonedevent)
- [ReferencedEvent](objects#referencedevent)
- [RenamedTitleEvent](objects#renamedtitleevent)
- [ReopenedEvent](objects#reopenedevent)
- [SubscribedEvent](objects#subscribedevent)
- [TransferredEvent](objects#transferredevent)
- [UnassignedEvent](objects#unassignedevent)
- [UnlabeledEvent](objects#unlabeledevent)
- [UnlockedEvent](objects#unlockedevent)
- [UnsubscribedEvent](objects#unsubscribedevent)
- [UserBlockedEvent](objects#userblockedevent)

## IssueTimelineItems

An item in an issue timeline

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [AddedToProjectEvent](objects#addedtoprojectevent)
- [AssignedEvent](objects#assignedevent)
- [ClosedEvent](objects#closedevent)
- [CommentDeletedEvent](objects#commentdeletedevent)
- [ConnectedEvent](objects#connectedevent)
- [ConvertedNoteToIssueEvent](objects#convertednotetoissueevent)
- [CrossReferencedEvent](objects#crossreferencedevent)
- [DemilestonedEvent](objects#demilestonedevent)
- [DisconnectedEvent](objects#disconnectedevent)
- [IssueComment](objects#issuecomment)
- [LabeledEvent](objects#labeledevent)
- [LockedEvent](objects#lockedevent)
- [MarkedAsDuplicateEvent](objects#markedasduplicateevent)
- [MentionedEvent](objects#mentionedevent)
- [MilestonedEvent](objects#milestonedevent)
- [MovedColumnsInProjectEvent](objects#movedcolumnsinprojectevent)
- [PinnedEvent](objects#pinnedevent)
- [ReferencedEvent](objects#referencedevent)
- [RemovedFromProjectEvent](objects#removedfromprojectevent)
- [RenamedTitleEvent](objects#renamedtitleevent)
- [ReopenedEvent](objects#reopenedevent)
- [SubscribedEvent](objects#subscribedevent)
- [TransferredEvent](objects#transferredevent)
- [UnassignedEvent](objects#unassignedevent)
- [UnlabeledEvent](objects#unlabeledevent)
- [UnlockedEvent](objects#unlockedevent)
- [UnmarkedAsDuplicateEvent](objects#unmarkedasduplicateevent)
- [UnpinnedEvent](objects#unpinnedevent)
- [UnsubscribedEvent](objects#unsubscribedevent)
- [UserBlockedEvent](objects#userblockedevent)

## MilestoneItem

Types that can be inside a Milestone.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](objects#issue)
- [PullRequest](objects#pullrequest)

## OrganizationAuditEntry

An audit entry in an organization audit log.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [MembersCanDeleteReposClearAuditEntry](objects#memberscandeletereposclearauditentry)
- [MembersCanDeleteReposDisableAuditEntry](objects#memberscandeletereposdisableauditentry)
- [MembersCanDeleteReposEnableAuditEntry](objects#memberscandeletereposenableauditentry)
- [OauthApplicationCreateAuditEntry](objects#oauthapplicationcreateauditentry)
- [OrgAddBillingManagerAuditEntry](objects#orgaddbillingmanagerauditentry)
- [OrgAddMemberAuditEntry](objects#orgaddmemberauditentry)
- [OrgBlockUserAuditEntry](objects#orgblockuserauditentry)
- [OrgConfigDisableCollaboratorsOnlyAuditEntry](objects#orgconfigdisablecollaboratorsonlyauditentry)
- [OrgConfigEnableCollaboratorsOnlyAuditEntry](objects#orgconfigenablecollaboratorsonlyauditentry)
- [OrgCreateAuditEntry](objects#orgcreateauditentry)
- [OrgDisableOauthAppRestrictionsAuditEntry](objects#orgdisableoauthapprestrictionsauditentry)
- [OrgDisableSamlAuditEntry](objects#orgdisablesamlauditentry)
- [OrgDisableTwoFactorRequirementAuditEntry](objects#orgdisabletwofactorrequirementauditentry)
- [OrgEnableOauthAppRestrictionsAuditEntry](objects#orgenableoauthapprestrictionsauditentry)
- [OrgEnableSamlAuditEntry](objects#orgenablesamlauditentry)
- [OrgEnableTwoFactorRequirementAuditEntry](objects#orgenabletwofactorrequirementauditentry)
- [OrgInviteMemberAuditEntry](objects#orginvitememberauditentry)
- [OrgInviteToBusinessAuditEntry](objects#orginvitetobusinessauditentry)
- [OrgOauthAppAccessApprovedAuditEntry](objects#orgoauthappaccessapprovedauditentry)
- [OrgOauthAppAccessDeniedAuditEntry](objects#orgoauthappaccessdeniedauditentry)
- [OrgOauthAppAccessRequestedAuditEntry](objects#orgoauthappaccessrequestedauditentry)
- [OrgRemoveBillingManagerAuditEntry](objects#orgremovebillingmanagerauditentry)
- [OrgRemoveMemberAuditEntry](objects#orgremovememberauditentry)
- [OrgRemoveOutsideCollaboratorAuditEntry](objects#orgremoveoutsidecollaboratorauditentry)
- [OrgRestoreMemberAuditEntry](objects#orgrestorememberauditentry)
- [OrgUnblockUserAuditEntry](objects#orgunblockuserauditentry)
- [OrgUpdateDefaultRepositoryPermissionAuditEntry](objects#orgupdatedefaultrepositorypermissionauditentry)
- [OrgUpdateMemberAuditEntry](objects#orgupdatememberauditentry)
- [OrgUpdateMemberRepositoryCreationPermissionAuditEntry](objects#orgupdatememberrepositorycreationpermissionauditentry)
- [OrgUpdateMemberRepositoryInvitationPermissionAuditEntry](objects#orgupdatememberrepositoryinvitationpermissionauditentry)
- [PrivateRepositoryForkingDisableAuditEntry](objects#privaterepositoryforkingdisableauditentry)
- [PrivateRepositoryForkingEnableAuditEntry](objects#privaterepositoryforkingenableauditentry)
- [RepoAccessAuditEntry](objects#repoaccessauditentry)
- [RepoAddMemberAuditEntry](objects#repoaddmemberauditentry)
- [RepoAddTopicAuditEntry](objects#repoaddtopicauditentry)
- [RepoArchivedAuditEntry](objects#repoarchivedauditentry)
- [RepoChangeMergeSettingAuditEntry](objects#repochangemergesettingauditentry)
- [RepoConfigDisableAnonymousGitAccessAuditEntry](objects#repoconfigdisableanonymousgitaccessauditentry)
- [RepoConfigDisableCollaboratorsOnlyAuditEntry](objects#repoconfigdisablecollaboratorsonlyauditentry)
- [RepoConfigDisableContributorsOnlyAuditEntry](objects#repoconfigdisablecontributorsonlyauditentry)
- [RepoConfigDisableSockpuppetDisallowedAuditEntry](objects#repoconfigdisablesockpuppetdisallowedauditentry)
- [RepoConfigEnableAnonymousGitAccessAuditEntry](objects#repoconfigenableanonymousgitaccessauditentry)
- [RepoConfigEnableCollaboratorsOnlyAuditEntry](objects#repoconfigenablecollaboratorsonlyauditentry)
- [RepoConfigEnableContributorsOnlyAuditEntry](objects#repoconfigenablecontributorsonlyauditentry)
- [RepoConfigEnableSockpuppetDisallowedAuditEntry](objects#repoconfigenablesockpuppetdisallowedauditentry)
- [RepoConfigLockAnonymousGitAccessAuditEntry](objects#repoconfiglockanonymousgitaccessauditentry)
- [RepoConfigUnlockAnonymousGitAccessAuditEntry](objects#repoconfigunlockanonymousgitaccessauditentry)
- [RepoCreateAuditEntry](objects#repocreateauditentry)
- [RepoDestroyAuditEntry](objects#repodestroyauditentry)
- [RepoRemoveMemberAuditEntry](objects#reporemovememberauditentry)
- [RepoRemoveTopicAuditEntry](objects#reporemovetopicauditentry)
- [RepositoryVisibilityChangeDisableAuditEntry](objects#repositoryvisibilitychangedisableauditentry)
- [RepositoryVisibilityChangeEnableAuditEntry](objects#repositoryvisibilitychangeenableauditentry)
- [TeamAddMemberAuditEntry](objects#teamaddmemberauditentry)
- [TeamAddRepositoryAuditEntry](objects#teamaddrepositoryauditentry)
- [TeamChangeParentTeamAuditEntry](objects#teamchangeparentteamauditentry)
- [TeamRemoveMemberAuditEntry](objects#teamremovememberauditentry)
- [TeamRemoveRepositoryAuditEntry](objects#teamremoverepositoryauditentry)

## OrgRestoreMemberAuditEntryMembership

Types of memberships that can be restored for an Organization member.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [OrgRestoreMemberMembershipOrganizationAuditEntryData](objects#orgrestoremembermembershiporganizationauditentrydata)
- [OrgRestoreMemberMembershipRepositoryAuditEntryData](objects#orgrestoremembermembershiprepositoryauditentrydata)
- [OrgRestoreMemberMembershipTeamAuditEntryData](objects#orgrestoremembermembershipteamauditentrydata)

## PermissionGranter

Types that can grant permissions on a repository to a user

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Organization](objects#organization)
- [Repository](objects#repository)
- [Team](objects#team)

## PinnableItem

Types that can be pinned to a profile page.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Gist](objects#gist)
- [Repository](objects#repository)

## ProjectCardItem

Types that can be inside Project Cards.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](objects#issue)
- [PullRequest](objects#pullrequest)

## PullRequestTimelineItem

An item in a pull request timeline

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [AssignedEvent](objects#assignedevent)
- [BaseRefDeletedEvent](objects#baserefdeletedevent)
- [BaseRefForcePushedEvent](objects#baserefforcepushedevent)
- [ClosedEvent](objects#closedevent)
- [Commit](objects#commit)
- [CommitCommentThread](objects#commitcommentthread)
- [CrossReferencedEvent](objects#crossreferencedevent)
- [DemilestonedEvent](objects#demilestonedevent)
- [DeployedEvent](objects#deployedevent)
- [DeploymentEnvironmentChangedEvent](objects#deploymentenvironmentchangedevent)
- [HeadRefDeletedEvent](objects#headrefdeletedevent)
- [HeadRefForcePushedEvent](objects#headrefforcepushedevent)
- [HeadRefRestoredEvent](objects#headrefrestoredevent)
- [IssueComment](objects#issuecomment)
- [LabeledEvent](objects#labeledevent)
- [LockedEvent](objects#lockedevent)
- [MergedEvent](objects#mergedevent)
- [MilestonedEvent](objects#milestonedevent)
- [PullRequestReview](objects#pullrequestreview)
- [PullRequestReviewComment](objects#pullrequestreviewcomment)
- [PullRequestReviewThread](objects#pullrequestreviewthread)
- [ReferencedEvent](objects#referencedevent)
- [RenamedTitleEvent](objects#renamedtitleevent)
- [ReopenedEvent](objects#reopenedevent)
- [ReviewDismissedEvent](objects#reviewdismissedevent)
- [ReviewRequestRemovedEvent](objects#reviewrequestremovedevent)
- [ReviewRequestedEvent](objects#reviewrequestedevent)
- [SubscribedEvent](objects#subscribedevent)
- [UnassignedEvent](objects#unassignedevent)
- [UnlabeledEvent](objects#unlabeledevent)
- [UnlockedEvent](objects#unlockedevent)
- [UnsubscribedEvent](objects#unsubscribedevent)
- [UserBlockedEvent](objects#userblockedevent)

## PullRequestTimelineItems

An item in a pull request timeline

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [AddedToProjectEvent](objects#addedtoprojectevent)
- [AssignedEvent](objects#assignedevent)
- [AutoMergeDisabledEvent](objects#automergedisabledevent)
- [AutoMergeEnabledEvent](objects#automergeenabledevent)
- [AutoRebaseEnabledEvent](objects#autorebaseenabledevent)
- [AutoSquashEnabledEvent](objects#autosquashenabledevent)
- [AutomaticBaseChangeFailedEvent](objects#automaticbasechangefailedevent)
- [AutomaticBaseChangeSucceededEvent](objects#automaticbasechangesucceededevent)
- [BaseRefChangedEvent](objects#baserefchangedevent)
- [BaseRefDeletedEvent](objects#baserefdeletedevent)
- [BaseRefForcePushedEvent](objects#baserefforcepushedevent)
- [ClosedEvent](objects#closedevent)
- [CommentDeletedEvent](objects#commentdeletedevent)
- [ConnectedEvent](objects#connectedevent)
- [ConvertToDraftEvent](objects#converttodraftevent)
- [ConvertedNoteToIssueEvent](objects#convertednotetoissueevent)
- [CrossReferencedEvent](objects#crossreferencedevent)
- [DemilestonedEvent](objects#demilestonedevent)
- [DeployedEvent](objects#deployedevent)
- [DeploymentEnvironmentChangedEvent](objects#deploymentenvironmentchangedevent)
- [DisconnectedEvent](objects#disconnectedevent)
- [HeadRefDeletedEvent](objects#headrefdeletedevent)
- [HeadRefForcePushedEvent](objects#headrefforcepushedevent)
- [HeadRefRestoredEvent](objects#headrefrestoredevent)
- [IssueComment](objects#issuecomment)
- [LabeledEvent](objects#labeledevent)
- [LockedEvent](objects#lockedevent)
- [MarkedAsDuplicateEvent](objects#markedasduplicateevent)
- [MentionedEvent](objects#mentionedevent)
- [MergedEvent](objects#mergedevent)
- [MilestonedEvent](objects#milestonedevent)
- [MovedColumnsInProjectEvent](objects#movedcolumnsinprojectevent)
- [PinnedEvent](objects#pinnedevent)
- [PullRequestCommit](objects#pullrequestcommit)
- [PullRequestCommitCommentThread](objects#pullrequestcommitcommentthread)
- [PullRequestReview](objects#pullrequestreview)
- [PullRequestReviewThread](objects#pullrequestreviewthread)
- [PullRequestRevisionMarker](objects#pullrequestrevisionmarker)
- [ReadyForReviewEvent](objects#readyforreviewevent)
- [ReferencedEvent](objects#referencedevent)
- [RemovedFromProjectEvent](objects#removedfromprojectevent)
- [RenamedTitleEvent](objects#renamedtitleevent)
- [ReopenedEvent](objects#reopenedevent)
- [ReviewDismissedEvent](objects#reviewdismissedevent)
- [ReviewRequestRemovedEvent](objects#reviewrequestremovedevent)
- [ReviewRequestedEvent](objects#reviewrequestedevent)
- [SubscribedEvent](objects#subscribedevent)
- [TransferredEvent](objects#transferredevent)
- [UnassignedEvent](objects#unassignedevent)
- [UnlabeledEvent](objects#unlabeledevent)
- [UnlockedEvent](objects#unlockedevent)
- [UnmarkedAsDuplicateEvent](objects#unmarkedasduplicateevent)
- [UnpinnedEvent](objects#unpinnedevent)
- [UnsubscribedEvent](objects#unsubscribedevent)
- [UserBlockedEvent](objects#userblockedevent)

## PushAllowanceActor

Types that can be an actor.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [App](objects#app)
- [Team](objects#team)
- [User](objects#user)

## ReferencedSubject

Any referencable object

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](objects#issue)
- [PullRequest](objects#pullrequest)

## RenamedTitleSubject

An object which has a renamable title

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Issue](objects#issue)
- [PullRequest](objects#pullrequest)

## RequestedReviewer

Types that can be requested reviewers.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Mannequin](objects#mannequin)
- [Team](objects#team)
- [User](objects#user)

## ReviewDismissalAllowanceActor

Types that can be an actor.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Team](objects#team)
- [User](objects#user)

## SearchResultItem

The results of a search.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [App](objects#app)
- [Issue](objects#issue)
- [MarketplaceListing](objects#marketplacelisting)
- [Organization](objects#organization)
- [PullRequest](objects#pullrequest)
- [Repository](objects#repository)
- [User](objects#user)

## Sponsor

Entities that can sponsor others via GitHub Sponsors

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Organization](objects#organization)
- [User](objects#user)

## SponsorableItem

Entities that can be sponsored via GitHub Sponsors

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Organization](objects#organization)
- [User](objects#user)

## StatusCheckRollupContext

Types that can be inside a StatusCheckRollup context.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [CheckRun](objects#checkrun)
- [StatusContext](objects#statuscontext)

## VerifiableDomainOwner

Types that can own a verifiable domain.

<p style={{ marginBottom: "0.4em" }}><strong>Possible types</strong></p>

- [Enterprise](objects#enterprise)
- [Organization](objects#organization)

