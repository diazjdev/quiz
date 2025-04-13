import { fireEvent, render, screen } from '@testing-library/angular';
import { describe } from 'vitest';
import { QuizComponent } from './quiz.component';

describe('QuizComponent', () => {
  it('Component is rendered', async () => {
    await render(QuizComponent);
    const question = screen.getByRole('paragraph');

    expect(question).toBeTruthy();
    expect(question.textContent).toContain('What is the capital of France?');
  });

  it('Button prev is disabled', async () => {
    await render(QuizComponent);
    const prevButton = screen.getByRole('button', {
      name: 'Prev',
    }) as HTMLButtonElement;

    expect(prevButton.disabled).toBeTruthy();
  });

  it('Button Prev is enabled if button next is clicked', async () => {
    await render(QuizComponent);
    const prevButton = screen.getByRole('button', {
      name: 'Prev',
    }) as HTMLButtonElement;

    const nextButton = screen.getByRole('button', {
      name: 'Next',
    }) as HTMLButtonElement;

    fireEvent.click(nextButton);

    expect(prevButton.disabled).toBeFalsy();
  });
});
